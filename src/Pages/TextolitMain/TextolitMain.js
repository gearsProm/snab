import './textolitmain.scss';
import HelmetPage from '../../Components/Helmet/Helmet';


function TextolitMain () {
	return (
		<div className='price'>
			<HelmetPage 
			title="ТЕКСТОЛІТ ми продаємо ДЕШЕВШЕ. Дивіться ціни, марки та розміри."
			description="Де придбати текстоліт? ◉ Низька ціна текстоліта — можлива різка листів ◉ Перевірена якість ☎ +380 44 229 82 07"
			keywords=" "/>

			<h1>Текстоліт</h1>
			<div className="text-section">
			<h3 className="text-head">Різновиди текстоліту</h3>
			<p>
			Шаруваті листові пресовані матеріали, що складаються з кількох шарів хлопчатобумажної конструкційної тканини, пропитаної резольним фенолформальдегідним смолою.
			</p>
			<img src={require('./img/testolit.jpg' )}width="300px" alt="текстоліт" />
			<p>
			Текстоліт ПТ використовується для виготовлення шестерень, втулок, підшипників, ковзаючих деталей, панелей та прокладок для амортизаційних виробів технічного призначення.
			</p>
			<p>
			Текстоліт ПТК добре обробляється всіма видами механічної обробки. Використовується як конструкційний матеріал для виготовлення шестерень, втулок, роликів, підшипників. Вироби з текстоліту ПТК забезпечують безшумність роботи, значно більший термін служби та менший ваговий показник порівняно з металевими.
			</p>
			<p>
			Текстоліт ПТ-Н призначений для виготовлення технічних деталей загального призначення, монтажних панелей та прокладок.
			</p>
			<p>
			Текстоліт ПТГ-2 виготовляється на основі термореактивного зв'язуючого з добавкою графіту. Використовується для виготовлення герметизуючих шайб водяних насосів та для інших цілей.
			</p>
			<p>
			Текстоліт марки А: має підвищені електричні властивості, призначений для виготовлення деталей з підвищеними електроізоляційними характеристиками, які працюють на повітрі та у трансформаторній олиї в електричних полях з частотою 50 Гц.
			</p>
			<p>
			Асботекстоліт марки Г є шаруватим матеріалом на основі азбестової тканини та термореактивного зв'язуючого. Матеріал важкозаймистий, не токсичний. Робоча температура від -40°C до +130°C. Використовується для виготовлення гальмівних пристроїв, а також як теплоізоляційний матеріал.
			</p>
			</div>
			<div className="text-section">
			<h3 className="text-head">Технічні характеристики текстоліту</h3>
			<p>Текстоліт А,Б згідно з ГОСТ 2910-74, ТУ 05758999-014-96 (для товщини понад 50,0 мм). Аркуші розміром з товщиною від 0,5 до 50 мм. Хлопчатобумажна тканина, феноло-формальдегідне зв'язувальне вещество. Використовується для виготовлення електротехнічних деталей для роботи в трансформаторній олії та на повітрі при нормальній відносній вологості 45-75%, за температури (15-35)°C та частоти струму 50 Гц. Гарантійний термін зберігання - 18 місяців.</p>
			<p>
			Конструкційний тексоліт ПТК за ГОСТ 5-78. Аркуші товщиною від 0,5 до 80 мм. Хлопчатобумажна тканина, феноло-формальдегідне зв'язувальне вещество. Використовується для виготовлення шестерень черв'ячних коліс, втулок, підшипників скольження, кілець. Гарантійний термін зберігання - 36 місяців.
			</p>
			<p>
			Майстерний тексоліт ПТ за ГОСТ 5-78. Аркуші розміром мм. Товщина - від 0,5 до 80 мм. Хлопчатобумажна тканина, феноло-формальдегідне зв'язувальне вещество. Використовується для виготовлення тих самих деталей, для яких призначений тексоліт ПТК, але для роботи при нижчих навантаженнях. Гарантійний термін зберігання - 36 місяців.
			</p>
			</div>
			<div className="text-section">
			<h3 className="text-head">ОСНОВНІ ТЕХНІЧНІ ХАРАКТЕРИСТИКИ ТЕКСТОЛІТІВ</h3>
			<div className="text-table">
			<table className='tt' border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th rowspan="2">Найменування показників</th>
<th rowspan="2">Од. вим.</th>
<th colspan="2">Текстоліт</th>
<th rowspan="2">ПТК</th>
<th rowspan="2">ПТ</th>
</tr>
<tr>
<th>А</th>
<th>Б</th>
</tr>
<tr>
<td>Руйнувальна напруга при згинанні перпендикулярно шарам, не менше</td>
<td>МПа</td>
<td>90</td>
<td>100</td>
<td>152</td>
<td>142</td>
</tr>
<tr>
<td>Руйнувальна напруга при розтягуванні, не менше</td>
<td>МПа</td>
<td>35</td>
<td>45</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Руйнівна напруга при стисканні паралельно шарам, не менше</td>
<td>МПа</td>
<td>-</td>
<td>-</td>
<td>160</td>
<td>155</td>
</tr>
<tr>
<td>Ударна в'язкість по Шарпі на зразках без надрізу, не менше</td>
<td>КДж/м<sup>2</sup></td>
<td colspan="2">з надрізом 7,8</td>
<td>36</td>
<td>36</td>
</tr>
<tr>
<td>Водопоглинання, не більше для листів товщиною 3,5 мм</td>
<td>%
мг</td>
<td>-
166</td>
<td>-
255</td>
<td>0,7
-</td>
<td>0,7
-</td>
</tr>
<tr>
<td>Питомий об'ємний електричний опір після кондиціонування в умовах 24ч/23°С/93%, не менше, для листів завтовшки до 8,0 мм</td>
<td>Ом*м</td>
<td>1*10<sup>6</sup></td>
<td>1*10<sup>6</sup></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Пробивна напруга паралельно шарам (однохвилинне перевірочне випробування) в умовах М (90°С), трансформаторна олія, не менше</td>
<td>кВ</td>
<td>15</td>
<td>15</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Щільність</td>
<td>кг/м<sup>3</sup></td>
<td colspan="2">1300-1450</td>
<td>1300-1400</td>
<td>1300-1400</td>
</tr>
</tbody>
</table>
			</div>
			</div>
			<div className="text-section">
			<h3 className="text-head">Механічна обробка текстоліту</h3>
			<p>
				Текстоліт і гетинакс набагато краще піддаються механічній обробці, згинанню, витягуванню та штампуванню, ніж склотекстоліт, оскільки вони містять хлопчатобумажну тканину або папір, відповідно, замість скловолокна. При обробці цих матеріалів до інструментів пред'являються ті ж вимоги, що і при обробці звичайного дерева. При цьому слід враховувати низьку теплопровідність матеріалів та приймати заходи для запобігання перегріву оброблювального інструменту (наприклад, часто виводити свердло з отвору).
			</p>
			</div>
			<div className="text-section">
			<h3 className="text-head">Штампування, гнуття та витяжка текстоліту</h3>
			<p>
				Штампування, гнуття і витягування текстоліту Використовувані штампи аналогічні штампам для металів. Для покращення якості виробу листи текстоліту та гетинаксу слід перед штампуванням попередньо нагріти. Рекомендована температура: 120-130 °C, час нагріву 5-30 хвилин при товщині листів 1,5-6,5 мм відповідно. При штампуванні слід враховувати необхідне ущільнення та скорочення матеріалу з подальшим розширенням. Максимально допустима товщина текстоліту для холодного штампування - 3 мм, для гарячого - 6,5 мм, асботекстоліту - 2,5 мм для холодного штампування та 5 мм для гарячого штампування, гетинаксу - 1,5 мм та 3 мм для холодного та гарячого штампування відповідно.
			</p>
			<p>
				При гнутті і витягуванні матеріал слід нагрівати до 150-180 °C. Нагрів можна здійснювати у масляній ванні, між гарячими плитами, високочастотними струмами або у термостаті. Кривизна та кут вигину в формі повинні бути трохи більшими (приблизно на 2%), ніж потрібно для виробу, оскільки після завершення процесу обробки відбувається часткове випрямлення матеріалу. Тиск під час гнуття при товщині листів 1-3 мм повинен бути 0,4-3,3 кг/см2. При витягуванні тиск підтримують на рівні 3,5-5 кг/см2.
			</p>
			</div>
		</div>
	)
}

export default TextolitMain;