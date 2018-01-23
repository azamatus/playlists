<?php
/**
 * Created by PhpStorm.
 * User: aza
 * Date: 1/16/18
 * Time: 8:46 PM
 */
namespace App\Controller;

use App\Entity\Tracks;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TracksController extends Controller
{
    public function index()
    {
        $doctrine = $this->getDoctrine();
        $request = Request::createFromGlobals();
        $em = $doctrine->getManager();
        if ($request->isMethod('POST')) {
            $params = $request->request->all();
            $tracks = new Tracks();
            if ($params) {
                $tracks->setPerformer($params['performer']);
                $tracks->setTitle($params['title']);
                $tracks->setGenre($params['genre']);
                $tracks->setYear($params['year']);
                $em->persist($tracks);
                $em->flush();
                $params['id'] = (string)$tracks->getId();
                $result = [
                    'success' => 1,
                    'message' => 'Saved',
                    'params' => $params
                ];
                return $this->json($result);
            } else {
                $result = [
                    'success' => 0,
                    'message' => 'No data'
                ];
                return $this->json($result);
            }
        }
        $paginate = $doctrine->getRepository(Tracks::class)->getTracks();
        $paginator = $this->get('knp_paginator');
        $pagination = $paginator->paginate(
            $paginate,
            $request->query->getInt('page',1),
            10
        );
        $tracks = $doctrine
            ->getRepository(Tracks::class)
            ->findAll();

        return $this->render('tracks/list.html.twig', [
            'tracks' => $tracks,
            'pagination' => $pagination
        ]);
    }

    public function remove()
    {
        $request = Request::createFromGlobals();
        if ($request->isMethod('POST')) {
            $params = $request->request->all();
            $em = $this->getDoctrine()->getManager();
            $track = $em->getRepository(Tracks::class)->find($params['track_id']);
            if (!$track) {
                return $this->json([
                   'success' => 0,
                   'message' => 'Not found'
                ]);
            }
            $em->remove($track);
            $em->flush();
            return $this->json([
               'success' => 1,
               'message' => 'Removed'
            ]);
        }
    }
}