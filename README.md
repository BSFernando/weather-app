## :link: Acesso em [Github Pages](https://bsfernando.github.io/weather-app/)

## Preview
<img width=800 height=auto src="https://github.com/BSFernando/weather-app/blob/main/openweathermap.png"></img>
# Passo a passo

Clone o repositório
```bash
git clone https://github.com/BSFernando/weather-app
cd weather-app
```

Instale as dependências
```bash
npm install
```

Preencha o campo "apiKey" com o token gerado em [openweathermap](https://openweathermap.org/)
```bash
export const environment = {
    production: false,
    apiKey: '',
    apiWeatherUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
    featureFlag: true
  };
```

Iniciar o servidor local

```bash
ng serve
```

Acesse
```
http://localhost:4200
```
