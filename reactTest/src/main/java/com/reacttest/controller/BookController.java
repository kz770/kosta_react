package com.reacttest.controller;

import com.reacttest.dao.BookDAO;
import com.reacttest.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    private BookDAO dao;

    @RequestMapping("/books")
    public List<Book> findAll(){
        return dao.findAll(Sort.by("bookid"));
    }
    @PostMapping("/insert")
    public String insert(Book book){
        book.setBookid(dao.getNextBookId());
        System.out.println(book);
        dao.save(book);
        return "OK";
    }
    @PostMapping("/update")
    public String update(Book book){
        dao.save(book);
        return "OK";
    }
}
