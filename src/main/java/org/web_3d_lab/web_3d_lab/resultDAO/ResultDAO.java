package org.web_3d_lab.web_3d_lab.resultDAO;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.web_3d_lab.web_3d_lab.stored_objects.Result;

import java.util.List;

public class ResultDAO {

    public void saveResult(Result result) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.save(result);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            System.out.println(e.getMessage());
        }
    }

    public Result getResultById(int id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Result.class, id);
        }
    }

    public List<Result> getAllResults() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Query<Result> query = session.createQuery("from Result", Result.class);
            return query.getResultList();
        }
    }
}
