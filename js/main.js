import { createPostList } from "./data.js";
import {createPosts, templatePhoto} from "./thumbnail.js";


let pictures = document.querySelector('.pictures');
let posts = createPostList(25);

pictures.append(createPosts(posts, templatePhoto));
