import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
/* Указываем box sizing */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
    padding: 0;
}

html,
body,
#root {
    min-height: 100vh;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a {
  text-decoration: none;
  color: inherit;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
article > * + * {
  margin-top: 1em;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default CSSReset;