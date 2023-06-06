import React from "react"
import axios from "axios"
import { getStrapiURL } from "@/utils/index"
import ArchiveSection from "@/components/articles/ArchiveSection"
import config from '@/utils/config'

const Category = ({ items, categories }) => {
  return <ArchiveSection items={items} categories={categories} />
}

export async function getStaticPaths() {
  return axios
    .get(`${getStrapiURL(`/api/categories`)}`)
    .then((response) => {
      if (!response.data) {
        throw new Error("Failed to fetch API data")
      }

      return {
        paths: response.data.data.map((category) => ({
          params: {
            slug: category.attributes.slug,
          },
        })),
        fallback: false,
      }
    })
    .catch((error) => {
      console.error("Error fetching category:", error)

      return {
        paths: [],
        fallback: false,
      }
    })
}

export async function getStaticProps({ params }) {
  const [categoryResponse, allCategories] = await Promise.all([
    axios.get(getStrapiURL(`/${config.blog.API_CATEGORIES_CONTENT_QUERY}&filters[slug][$eq]=${params.slug}`)),
    axios.get(getStrapiURL("/api/categories")),
  ])

  const matchingCategory = categoryResponse.data.data.find(
    (category) => category.attributes.slug === params.slug
  )

  return {
    props: {
      items: matchingCategory.attributes.articles.data,
      categories: allCategories.data.data,
    },
    revalidate: 1,
  }
}

export default Category
