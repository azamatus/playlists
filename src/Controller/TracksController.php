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

class TracksController extends Controller
{

    public function index()
    {
//        $em = $this->getDoctrine()->getManager();
//        $tracks = new Tracks();
//        $tracks->setTitle('New title');
//        $tracks->setYear(1223);
//        $em->persist($tracks);
//        $em->flush();

        return $this->render('tracks/list.html.twig', array(
            'number' => 1,
        ));
    }

    public function music()
    {
        return $this->render('tracks/list.html.twig', array(
            'number' => 1,
        ));
    }
}