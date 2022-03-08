import {apiOperations} from "../../Constants/apiOperations";
import pokeEndpointType from "../../../fixtures/apiCalls/PokeApi/endpointType"

const baseUrl = Cypress.env("pokeApiUrl")
const endpointBaseUrl = pokeEndpointType.pokemonBaseEndpoint
const pokeUrl = baseUrl+endpointBaseUrl

describe ("API Testing using pokeapi.co", () => {

const pokemonList = require("../../../fixtures/pokemonList.json")
    pokemonList.forEach((pokemon)=>{
        it(`Obtain Single Pokemon Data - ${pokemon}`,()=>{
            cy.ApiOperation(apiOperations.GET,`${pokeUrl}${pokemon}`, "","")
                .then((pokemonResponse) => {
                expect(pokemonResponse.status).to.eq(200)
                expect(pokemonResponse.body).to.not.be.null
                expect(pokemonResponse.body).to.not.be.empty
                expect(pokemonResponse.isOkStatusCode).to.eq(true)
                expect(pokemonResponse.statusText).to.eq("OK")
                })
        })
    })

})