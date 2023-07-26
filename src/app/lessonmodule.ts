/* Interface structure of LessonModule */

//import { Url } from "url";

export interface LessonModule {
    id: number;
    title: string;
    completed: boolean;
    hasPracticeTests: boolean;
    /*
    studyLink: Url;
    practiceLink: Url;
    resourceLinK: Url
    */
}