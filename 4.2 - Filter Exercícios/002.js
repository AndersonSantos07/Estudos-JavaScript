//apenas empresas fundadas apos 1975 e que tenham mais de 200 de marketvalue

const companies = [
    {name:'Samsung',marketValue:50,CEO:'Kim',foundedOn:1938},
    {name:'Microsoft',marketValue:415,CEO:'Satya',foundedOn:1975},
    {name:'Intel',marketValue:117,CEO:'Brian',foundedOn:1968},
    {name:'Facebook',marketValue:383,CEO:'Mark',foundedOn:2004},
    {name:'Spotify',marketValue:30,CEO:'Daniel',foundedOn:2006},
    {name:'Apple',marketValue:845,CEO:'Tim',foundedOn:1976}
]

const newCompanies = companies.filter(empresas => empresas.marketValue >= 200 && empresas.foundedOn >= 1975)
console.log(newCompanies)