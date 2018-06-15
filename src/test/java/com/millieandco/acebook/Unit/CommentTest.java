package com.millieandco.acebook.Unit;

import com.millieandco.acebook.Comment;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CommentTest {

    private Comment comment = new Comment("this is a comment");

    @Test
    public void commentHasId() {
        assertEquals(comment.getId(), 0);
    }

    @Test
    public void postHasContent() {
        assertEquals(comment.getComment(), "this is a comment");
    }

    @Test
    public void toStringReturnsCorrectString() {
        assertEquals(comment.toString(), "Comment[id=0, comment='this is a comment']");
    }


}
