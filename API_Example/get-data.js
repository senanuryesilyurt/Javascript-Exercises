import axios from "axios";

// export default (async (userId) => {
//     const { data: user } = await axios.get("https://jsonplaceholder.typicode.com/users/" + userId);
//     const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

//     console.log(user);
//     console.log(posts);

// })();

// const usr = async (usrId) => {
//   await axios.get("https://jsonplaceholder.typicode.com/users/" + usrId);
//   //   console.log(user);
// };

async function getUser(userId) {
    const { data: user } = await axios.get("https://jsonplaceholder.typicode.com/users/" + userId);
    console.log(user);
}
async function getPosts(userId) {
    const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    console.log(posts);
}

export {getUser, getPosts};
