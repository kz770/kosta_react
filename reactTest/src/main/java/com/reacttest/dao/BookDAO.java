package com.reacttest.dao;

import com.reacttest.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookDAO extends JpaRepository<Book, Integer> {
    @Query(value="select nvl(max(bookid),0)+1 from book", nativeQuery = true)
    public int getNextBookId();
}
