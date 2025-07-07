from generate_insight import generate_insight, insert_into_database
from flask_cors import CORS, cross_origin
from flask import Flask, jsonify
from bs4 import BeautifulSoup
import requests
import time

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/generate_action_plan', methods=['GET'])
def generate_action_plan():
    while True:
        try:
            print("Tentando gerar e inserir plano de ação...")
            action_plan_json = generate_insight()

            if action_plan_json:
                try:
                    insert_into_database(action_plan_json)
                    print("Plano de ação gerado e inserido com sucesso!")
                    return jsonify({"message": "Plano de ação gerado e inserido com sucesso!"}), 200
                except Exception as e:
                    print(f"Erro ao inserir no banco de dados: {e}")
            else:
                print("Erro ao gerar o plano de ação. Tentando novamente...")
        except Exception as e:
            print(f"Erro inesperado: {e}")

        print("Reiniciando tentativa...")
        time.sleep(1)

@app.route('/api/dolar', methods=['GET'])
def get_dolar():
    try:
        url = "https://economia.awesomeapi.com.br/json/daily/USD-BRL/30"
        response = requests.get(url)
        data = response.json()

        today = data[0]
        seven_days_ago = data[29]

        result = {
            "today": {
                "bid": today["bid"],
                "create_date": today["create_date"]
            },
            "seven_days_ago": {
                "bid": seven_days_ago["bid"],
                "create_date": seven_days_ago.get("create_date", "Data não disponível")
            }
        }
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/noticias', methods=['GET'])
def get_news():
    try:
        url = 'https://itforum.com.br/noticias/'
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 OPR/113.0.0.0'}
        
        site = requests.get(url, headers=headers)
        soup = BeautifulSoup(site.content, 'html.parser')

        noticias = []

        cards = soup.find_all('div', class_='card card-category')

        for card in cards:
            titulo_element = card.find('h5', class_='card-title')
            titulo = titulo_element.get_text(strip=True)
            url_noticia = titulo_element.find('a')['href']

            texto = card.find('div', class_='card-body').get_text(strip=True, separator=" ").split('...')[0]

            autor = card.find('p', class_='card__author').get_text(strip=True)
            data = card.find('span', class_='card__date').get_text(strip=True)

            img_element = card.find('picture').find('img')
            if img_element:
                img_url = img_element['data-src'] if 'data-src' in img_element.attrs else img_element['src']

            noticia = {
                'titulo': titulo,
                'url': url_noticia,
                'texto': texto,
                'autor': autor,
                'data': data,
                'imagem': img_url
            }

            noticias.append(noticia)

        return jsonify(noticias)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# @app.route('/api/hpe_noticias', methods=['GET'])
# def get_hpe_news():
#     try:
#         url = 'https://www.hpe.com/us/en/newsroom.html'
#         headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 OPR/113.0.0.0'}
        
#         site = requests.get(url, headers=headers)
#         soup = BeautifulSoup(site.content, 'html.parser')

#         noticias = []

#         cards = soup.find_all('div', class_='uc-card')

#         for card in cards:
#             titulo_element = card.find('h4', class_='txto-title')
#             titulo = titulo_element.get_text(strip=True) if titulo_element else 'Título não disponível'

#             url_noticia = card.find('a', class_='uc-card-wrapper')['href']
#             if not url_noticia.startswith('https'):
#                 url_noticia = f'https://www.hpe.com{url_noticia}'

#             data_element = card.find('div', class_='uc-card-label').find_all('span')[-1]
#             data = data_element.get_text(strip=True) if data_element else 'Data não disponível'

#             img_url = None
#             smart_image_element = card.find('smart-image')
#             if smart_image_element and 'data-src-base' in smart_image_element.attrs:
#                 img_url = 'https://www.hpe.com' + smart_image_element['data-src-base']
                
#                 img_url = img_url.split('.hpetransform/')[0]

#             if not img_url:
#                 img_url = 'Imagem não disponível'

#             noticia = {
#                 'titulo': titulo,
#                 'url': url_noticia,
#                 'data': data,
#                 'imagem': img_url
#             }

#             noticias.append(noticia)

#         return jsonify(noticias)

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Iniciando o servidor Flask...")
    app.run(debug=True)

# To run with Gunicorn, execute the following command in your terminal:
# gunicorn -w 4 -b 0.0.0.0:8000 <your_module_name>:app