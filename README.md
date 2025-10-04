# Книга контактів

Додаток "Книга контактів" з використанням React та Redux Toolkit.

## Функціональність

- Додавання нових контактів
- Видалення контактів
- Фільтрація контактів за іменем
- Збереження контактів у локальному сховищі браузера (Redux Persist)

## Технології

- React 18
- Redux Toolkit
- Redux Persist
- React Redux
- PropTypes

## Встановлення

1. Клонуйте репозиторій
2. Встановіть залежності:
   ```bash
   npm install
   ```
3. Запустіть додаток:
   ```bash
   npm start
   ```

## Деплой

Додаток автоматично деплоїться на GitHub Pages при пуше в гілку `main`.

**Посилання на деплой:** https://indozer.github.io/hw-js-30

## Структура Redux

```javascript
{
  contacts: {
    contacts: [],
    filter: ""
  }
}
```

## Особливості реалізації

- Використання `createSlice` для створення reducer та actions
- Використання `configureStore` для налаштування Redux store
- Redux Persist для збереження контактів у localStorage
- PropTypes для типізації компонентів
- Модульна структура компонентів з окремими CSS файлами
