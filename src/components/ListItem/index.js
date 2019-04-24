import React from "react";
import {
  Item,
  Title,
  Host,
  ExternalLink,
  Description,
  CommentLink
} from "./styles";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import getSiteHostname from "utils/getSiteHostname";
import getArticleLink, { HN_USER, HN_ITEM } from "utils/getArticleLink";

const LINK_REL = "nooperner noreferrer nofollow";

const ListItem = ({ title, by, score, time, kids = [], id, type, url }) => {
  const site = getSiteHostname(url) || "news.ycombinator.com";
  const link = getArticleLink({ url, id });
  const commentUrl = `${HN_ITEM}${id}`;
  const userUrl = `${HN_USER}${by}`;
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  return (
    <Item>
      <ExternalLink href={link} rel={LINK_REL} target="_blank">
        <Title>
          {title} <Host>({site})</Host>
        </Title>
      </ExternalLink>
      <Description>
        {score} points by{" "}
        <CommentLink href={userUrl} rel={LINK_REL} target="_blank">
          {by}{" "}
        </CommentLink>
        {timeAgo.format(new Date(time * 1000))}
        {" | "}
        <CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
          {kids.length} Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;
