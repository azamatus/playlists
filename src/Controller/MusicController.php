<?php
/**
 * Created by PhpStorm.
 * User: aza
 * Date: 1/16/18
 * Time: 8:46 PM
 */


namespace App\Controller;


use App\Entity\Musics;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class MusicController extends Controller
{

    public function index()
    {
        return $this->render('music/list.html.twig', array(
            'number' => 1,
        ));
    }

    public function music()
    {
        return $this->render('music/list.html.twig', array(
            'number' => 1,
        ));
    }
}