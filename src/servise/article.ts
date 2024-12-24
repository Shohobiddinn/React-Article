import axios from "./axios"

const ArticleService = {
    articles() {
        return axios.get('/articles')
    },
    articleDetail(slug: string) {
        return axios.get(`/articles/${slug}`)
    },
    createArticle(article: any) {
        return axios.post('/articles', { article })
    },
    deleteArticle(slug: string) {
        return axios.delete(`/articles/${slug}`)
    },
    updateArticle(article: any, slug: string) {
        return axios.put(`/articles/${slug}`, { article })
    },
}

export default ArticleService