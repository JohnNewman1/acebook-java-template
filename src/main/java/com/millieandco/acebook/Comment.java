package com.millieandco.acebook;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "comment")
    private String comment;

    @ManyToOne
    private Post post;

    protected Comment() {
    }

    public Comment(String comment) {
        this.comment = comment;

    }

    @Override
    public String toString() {
        return String.format("Comment[id=%d, comment='%s']", id, comment);
    }
}

