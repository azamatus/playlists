<?php

namespace App\Repository;

use App\Entity\Tracks;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class TracksRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Tracks::class);
    }


    public function getTracks()
    {
        return $this->createQueryBuilder('t')
            ->getQuery();
    }
}
