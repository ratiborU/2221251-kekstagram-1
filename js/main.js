import {showUnloadingErrorMessage} from "./util.js";
import {renderPosts} from "./thumbnail.js";
import {sendData, getData} from "./fetch.js";
import "./big-picture.js";
import "./form.js";
import "./filters.js";


getData(renderPosts, showUnloadingErrorMessage);




