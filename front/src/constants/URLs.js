const { REACT_APP_HOST } = process.env;

export const topicsUrl = `http://${REACT_APP_HOST}/topics`
export const articlesUrl = `http://${REACT_APP_HOST}/articles`
export const articleUrl = `http://${REACT_APP_HOST}/article`
export const tokenUrl = `http://${REACT_APP_HOST}/auth/token`
export const registrationUrl = `http://${REACT_APP_HOST}/auth/registration`
export const saveArticleUrl = `http://${REACT_APP_HOST}/article/create`