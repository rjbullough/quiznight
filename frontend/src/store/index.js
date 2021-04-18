import { auth } from "./auth.module";
import writable from "svelte/store";

const thisObject = {};

setContext("thisKey", thisObject);
