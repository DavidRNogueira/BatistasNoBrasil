package com.BatistasNoBrasil.BatistasNoBrasil.Dao;

import com.BatistasNoBrasil.BatistasNoBrasil.Entity.ChurchEntity;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ChurchDao {

    private final EntityManager entityManager;

    public ChurchDao (EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Transactional
    public void createOrUpdateChurch(ChurchEntity churchEntity){
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(churchEntity);
    }

    @Transactional
    public ChurchEntity getChurchById (String id) {
        Session session = entityManager.unwrap(Session.class);
        return session.get(ChurchEntity.class, id);
    }

    @Transactional
    public List<ChurchEntity> getChurches () {
        Session session = entityManager.unwrap(Session.class);
        return session.createQuery("SELECT a FROM Church a", ChurchEntity.class).getResultList();
    }

}

