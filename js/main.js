import { createPostList } from "./data.js";
import {createPosts} from "./thumbnail.js";
import "./big-picture.js";
import "./form.js";
import "./scale.js";


let pictures = document.querySelector('.pictures');
let posts = createPostList(25);


pictures.append(createPosts(posts));
