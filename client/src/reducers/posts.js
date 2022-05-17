const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "create":
      return posts;
    default:
      return posts;
  }
};
