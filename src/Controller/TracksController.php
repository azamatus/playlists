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
        $tracks = $this->getDoctrine()
            ->getRepository(Tracks::class)
            ->findAll();
//        if ($tracks) {
//            var_dump('exist');
//        } else {
//            var_dump('dont exist');
//        }
//        foreach ($tracks as $track) {
//            var_dump($track->getTitle());
//        }
//        die;
        return $this->render('tracks/list.html.twig', [
            'tracks' => $tracks,
            'data1' => 'data1',
            'data2' => 'data2',
            'data3' => 'data3'
        ]);
    }

    public function music()
    {
        return $this->render('tracks/list.html.twig', array(
            'number' => 1,
        ));
    }
}