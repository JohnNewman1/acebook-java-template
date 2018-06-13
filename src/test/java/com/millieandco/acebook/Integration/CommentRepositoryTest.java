package com.millieandco.acebook.Integration;

import com.millieandco.acebook.Post;
import com.millieandco.acebook.PostRepository;
import com.millieandco.acebook.Comment;
import com.millieandco.acebook.CommentRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import static org.junit.Assert.*;

import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class CommentRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Test
    public void readsAndWritesToDatabase() {
        postRepository.deleteAll();

        Post firstPost = new Post("first post");
        entityManager.persist(firstPost);
        entityManager.flush();

        Comment comment = new Comment("great comment");
        comment.setPost(firstPost);
        entityManager.persist(comment);
        entityManager.flush();

        List<Comment> comments = commentRepository.findAll();

        assertEquals(comments.get(0).getComment(), "great comment");
        assertEquals(comments.get(0).getPost(), firstPost);

    }
}