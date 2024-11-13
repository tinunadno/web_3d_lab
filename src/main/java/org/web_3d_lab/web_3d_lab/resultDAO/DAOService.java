package org.web_3d_lab.web_3d_lab.resultDAO;

import org.web_3d_lab.web_3d_lab.stored_objects.Result;

import java.util.List;

public class DAOService {
    private final ResultDAO resultDAO = new ResultDAO();

    public void saveResult(Result result) {
        resultDAO.saveResult(result);
    }

    public Result getResultById(int id) {
        return resultDAO.getResultById(id);
    }

    public List<Result> getAllResults() {
        return resultDAO.getAllResults();
    }
}
