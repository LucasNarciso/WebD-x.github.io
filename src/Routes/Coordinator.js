
export const goToPokedexPage = (navigate) => {
    navigate(`pokedex`)
}

export const goToDetailPage = (navigate, id) => {
    navigate(`detalhes/${id}`)
}

export const goToHomePage = (navigate) => {
    navigate("WebDex.github.io/")
}

export const goBack = (navigate) => {
    navigate(-1)
}