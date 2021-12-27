import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/GroupList.module.scss"
import { getAllItems } from "../utils/storyblok"
import AlbumCardList from "./AlbumCardList"

const GroupMemberList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  const [items, setItems] = useState([]);
  getAllItems('album', locale, sortby).then(
    function (result) {
      setItems(result.data.stories.filter(item => item.full_slug.includes(content.name)));
    }
  );

  return (
    <div className={styles.list}>
      <div>
        {items && items.length > 0 && <AlbumCardList items={items} type="album"></AlbumCardList>}
      </div>
    </div>
  );
};

export default GroupMemberList;
