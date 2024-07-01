

const PostList = (prop) => {
  return (
    <div>
      <li className="post-component">
        <button
          onClick={() => {
            prop.onSelect(prop);
          }}
        >
          <img src={prop.src} alt={prop.title} />
          <p className="post-name">{prop.title}</p>
        </button>
      </li>
    </div>
  );
};

export default PostList;
