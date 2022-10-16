const describe_city = (city, country = "Pakistan") => {
  console.log(city, 'is in', country)
}

describe_city('Islamabad')
describe_city('Istanbul', 'Turkey')
describe_city('Moscow', 'Russia')