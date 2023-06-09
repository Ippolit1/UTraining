const trainDoc = {
   // не сдаваться!
   'не сдаваться!': `польза от регулярных физических упражнений общеизвестна и 
не подвергается сомнению. Постоянные тренировки помогают укрепить 
здоровье, замедлить старение организма, а также предотвратить диабет 
второго типа, рак и болезни сердца.
`,
   // твоё преимущество
   'твоё преимущество': `занятия спортом и любые физические нагрузки обеспечивают большие 
преимущества для организма человека, его здоровья, улучшает 
кардиореспираторную и мышечную систему, кости, продлевает 
продолжительность жизни.
`,
   // как самочувствие?
   'как самочувствие?': `благодаря физической активности у вас улучшится самочувствие: 
пропадет раздражение, повысится выносливость, а также появится 
уверенность в себе.
`,
   // задача тренировки
   'задача тренировки': `задача тренировки — включить в работу мышцы и суставы, дыхательную, 
сердечно-сосудистую, нервную и эндокринную системы. Тренировка должна 
создать всплеск для гормонов стресса, но при этом не истощать.
`,
   // что такой радостный?
   'что такой радостный?': `после тренировки выделяются гормоны радости, мы гордимся собой, 
радуемся прогрессу и улучшению результатов. Регулярные занятия 
позволяют контролировать вес и самочувствие, укрепляют сердце и 
улучшают работу сосудов. Даже 30 минут активной ходьбы в день 
положительно скажутся на здоровье.
`,
   // а когда результат?
   'а когда результат?': `примерно через 2 месяца занятий ваше тело начнет трансформироваться, 
и вы сможете заметить первые физические изменения, появится рельеф мышц. 
Тем не менее, мы советуем вам не вставать на весы – это может ввести 
вас в заблуждение и негативно повлиять на вашу мотивацию.
`,
   // питание
   питание: `если вы не принимаете пищу, содержащую белки и углеводы после упражнений, 
то лишаете мышцы главного топлива. После тренировки ваше тело готово 
к потреблению полезных веществ.
`,
   // голод
   голод: `по словам врача, тренировка на голодный желудок приведет к сжиганию 
собственных мышц, а не жира, а интенсивные тренировки лучше всего 
проводить во второй половине дня.
`,
   // всего месяц?
   'всего месяц?': `сочетая эффективные упражнения и контролируя свою диету, 
можно подкорректировать свое тело всего за месяц. Самое главное, 
когда дело доходит до поддержания здорового веса и тонуса тела – 
это найти способ мотивировать себя к этому действию.
`,
   // крепатура?
   'крепатура?': `в большинстве случаев, если вы чувствуете крепатуру после тренировки, 
легкие восстановительные упражнения и умеренные силовые тренировки 
безопасны. Они могут даже принести пользу и помочь быстрее восстановиться. 
Но важно отдыхать, если вы испытываете симптомы усталости или боли.
`,
   // восстановление
   восстановление: `в среднем на восстановление требуется 72 часа. Соответственно, 
тренировки в зале более 2-3 раз в неделю, не имеют смысла. 
Стоит учитывать, что время напрямую зависит от объема мышц.
`,
   // максимальная энергия!
   'максимальная энергия!': `если вы хотите иметь максимум энергии для выполнения упражнений, 
перед занятиями нужно есть продукты, содержащие сложные углеводы: 
овсяную или рисовую кашу, хлеб грубого помола, тушеные овощи, бананы.
Они долго перевариваются, и энергия равномерно поступает в организм 
несколько часов после еды.
`,
   // безопасность
   безопасность: `если вы интенсивно тренируетесь каждый день, следует соблюдать 
несколько правил безопасности. Ежедневные занятия могут привести 
к травмам, усталости и выгоранию. В итоге, вам и вовсе не захочется 
продолжать. Начинайте медленно и постепенно увеличивайте продолжительность
и уровень нагрузки любых новых упражнений.
`,
   // зарядка
   зарядка: `утренняя зарядка оказывает комплексное воздействие на организм. 
Она активизирует кровообращение, ускоряет обмен веществ. Благодаря 
улучшенному кровотоку все внутренние органы получают достаточное 
питание и начинают значительно активнее функционировать.
`,
};
const trainHeads = [
   'не сдаваться!',
   'твоё преимущество',
   'как самочувствие?',
   'задача тренировки',
   'что такой радостный?',
   'а когда результат?',
   'питание',
   'голод',
   'всего месяц?',
   'крепатура?',
   'восстановление',
   'максимальная энергия!',
   'безопасность',
   'зарядка',
];
let headOut = document.querySelector('.doc_head');
let bodyOut = document.querySelector('.doc_body');
window.onload = function () {
   let i = Math.floor(Math.random() * trainHeads.length);
   let outH = trainHeads[i];
   let outB = trainDoc[outH];
   headOut.textContent = outH;
   bodyOut.textContent = outB;
};
