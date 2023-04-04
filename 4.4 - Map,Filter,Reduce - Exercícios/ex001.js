// 1 adicionar 10$% ao valor de mercado, depois filtrar as empresas fundadas antes dos anos 2000, depois somar o
//valor de mercado delas



const list = [20,3,234,12,17,541,6,87,275,1000]

const companies = [
    {name:'Samsung',marketValue:50,CEO:'Kim',foundedOn:1938},
    {name:'Microsoft',marketValue:415,CEO:'Satya',foundedOn:1975},
    {name:'Intel',marketValue:117,CEO:'Brian',foundedOn:1968},
    {name:'Facebook',marketValue:383,CEO:'Mark',foundedOn:2004},
    {name:'Spotify',marketValue:30,CEO:'Daniel',foundedOn:2006},
    {name:'Apple',marketValue:845,CEO:'Tim',foundedOn:1976}
]


const addMarketValue = company => {
    company.marketValue = company.marketValue + company.marketValue / 10 //adicionando 10% do market
    return company //retorna toda a compania + o marketvalue alterado
}

const filterCompanies = company => company.foundedOn < 2000

const sumCompanies = (acc,current) => acc + current.marketValue

const newCompanies = companies.map(addMarketValue)
                              .filter(filterCompanies)
                              .reduce(sumCompanies,0)

console.log(newCompanies)