# Pok-dex-interactif-


## 📁 Arborescence du Projet Pokédex

### 📌 Structure du projet

```mermaid
graph TD;
    A[src] --> B[components]
    B --> B1[Pokedex.js]
    B --> B2[PokemonCard.js]
    B --> B3[PokemonDetails.js]
    B --> B4[Pagination.js]
    B --> B5[SearchFilter.js]
    
    A --> C[styles]
    C --> C1[global.css]
    C --> C2[pokedex.css]
    C --> C3[pokemon-card.css]
    C --> C4[pokemon-details.css]
    C --> C5[pagination.css]
    C --> C6[search-filter.css]

    A --> D[App.js]
    A --> E[index.js]
    A --> F[index.css]
    A --> G[pokemon.json]
    A --> H[icons.json]
    A --> I[README.md]
    A --> J[arborescence.md]