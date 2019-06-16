def get_books(year, author):
    url = 'https://api.github.com/events' 
    params = {'year': year, 'author': author}
    r = requests.get(url, params=params)
    books = r.json()
    books_list = {'books':books['results']}
    return books_list