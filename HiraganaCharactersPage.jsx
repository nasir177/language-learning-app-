import React, { useState } from 'react';
import './HiraganaCharactersPage.css';

const HiraganaCharactersPage = () => {
  const [selectedScript, setSelectedScript] = useState('hiragana');

  // Basic Hiragana
  const hiragana = [
    // ... (same as before)
    ['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o'],
    ['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko'],
    ['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so'],
    ['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to'],
    ['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no'],
    ['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho'],
    ['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo'],
    ['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo'],
    ['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro'],
    ['わ', 'wa'], ['を', 'wo'],
    ['ん', 'n'],
    ['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go'],
    ['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo'],
    ['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do'],
    ['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo'],
    ['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po'],
    ['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo'],
    ['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho'],
    ['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho'],
    ['にゃ', 'nya'], ['にゅ', 'nyu'], ['にょ', 'nyo'],
    ['ひゃ', 'hya'], ['ひゅ', 'hyu'], ['ひょ', 'hyo'],
    ['みゃ', 'mya'], ['みゅ', 'myu'], ['みょ', 'myo'],
    ['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo'],
    ['ぎゃ', 'gya'], ['ぎゅ', 'gyu'], ['ぎょ', 'gyo'],
    ['じゃ', 'ja'], ['じゅ', 'ju'], ['じょ', 'jo'],
    ['びゃ', 'bya'], ['びゅ', 'byu'], ['びょ', 'byo'],
    ['ぴゃ', 'pya'], ['ぴゅ', 'pyu'], ['ぴょ', 'pyo'],
  ];

  // Basic Katakana
  const katakana = [
    // ... (same as before)
    ['ア', 'a'], ['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o'],
    ['カ', 'ka'], ['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko'],
    ['サ', 'sa'], ['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so'],
    ['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to'],
    ['ナ', 'na'], ['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no'],
    ['ハ', 'ha'], ['ヒ', 'hi'], ['フ', 'fu'], ['ヘ', 'he'], ['ホ', 'ho'],
    ['マ', 'ma'], ['ミ', 'mi'], ['ム', 'mu'], ['メ', 'me'], ['モ', 'mo'],
    ['ヤ', 'ya'], ['ユ', 'yu'], ['ヨ', 'yo'],
    ['ラ', 'ra'], ['リ', 'ri'], ['ル', 'ru'], ['レ', 're'], ['ロ', 'ro'],
    ['ワ', 'wa'], ['ヲ', 'wo'],
    ['ン', 'n'],
    ['ガ', 'ga'], ['ギ', 'gi'], ['グ', 'gu'], ['ゲ', 'ge'], ['ゴ', 'go'],
    ['ザ', 'za'], ['ジ', 'ji'], ['ズ', 'zu'], ['ゼ', 'ze'], ['ゾ', 'zo'],
    ['ダ', 'da'], ['ヂ', 'ji'], ['ヅ', 'zu'], ['デ', 'de'], ['ド', 'do'],
    ['バ', 'ba'], ['ビ', 'bi'], ['ブ', 'bu'], ['ベ', 'be'], ['ボ', 'bo'],
    ['パ', 'pa'], ['ピ', 'pi'], ['プ', 'pu'], ['ペ', 'pe'], ['ポ', 'po'],
    ['キャ', 'kya'], ['キュ', 'kyu'], ['キョ', 'kyo'],
    ['シャ', 'sha'], ['シュ', 'shu'], ['ショ', 'sho'],
    ['チャ', 'cha'], ['チュ', 'chu'], ['チョ', 'cho'],
    ['ニャ', 'nya'], ['ニュ', 'nyu'], ['ニョ', 'nyo'],
    ['ヒャ', 'hya'], ['ヒュ', 'hyu'], ['ヒョ', 'hyo'],
    ['ミャ', 'mya'], ['ミュ', 'myu'], ['ミョ', 'myo'],
    ['リャ', 'rya'], ['リュ', 'ryu'], ['リョ', 'ryo'],
    ['ギャ', 'gya'], ['ギュ', 'gyu'], ['ギョ', 'gyo'],
    ['ジャ', 'ja'], ['ジュ', 'ju'], ['ジョ', 'jo'],
    ['ビャ', 'bya'], ['ビュ', 'byu'], ['ビョ', 'byo'],
    ['ピャ', 'pya'], ['ピュ', 'pyu'], ['ピョ', 'pyo'],
  ];

  // JLPT N5 Kanji (at least 30)
  const kanji = [
    ['日', 'nichi/hi', 'day, sun'],
    ['一', 'ichi', 'one'],
    ['国', 'kuni', 'country'],
    ['人', 'hito', 'person'],
    ['年', 'nen', 'year'],
    ['大', 'dai', 'big'],
    ['十', 'juu', 'ten'],
    ['二', 'ni', 'two'],
    ['本', 'hon', 'book, origin'],
    ['中', 'naka', 'inside, middle'],
    ['長', 'naga', 'long, leader'],
    ['出', 'deru', 'exit, go out'],
    ['三', 'san', 'three'],
    ['時', 'ji', 'time, hour'],
    ['行', 'iku', 'go'],
    ['見', 'miru', 'see'],
    ['月', 'getsu/tsuki', 'month, moon'],
    ['後', 'ato', 'after, behind'],
    ['前', 'mae', 'before, in front'],
    ['生', 'sei', 'life, birth'],
    ['五', 'go', 'five'],
    ['間', 'aida', 'interval, space'],
    ['上', 'ue', 'up, above'],
    ['東', 'higashi', 'east'],
    ['四', 'shi/yon', 'four'],
    ['今', 'ima', 'now'],
    ['金', 'kin', 'gold, money'],
    ['九', 'kyuu', 'nine'],
    ['入', 'hairu', 'enter'],
    ['学', 'gaku', 'study, learning'],
    ['高', 'takai', 'tall, high'],
    ['円', 'en', 'yen, circle'],
    ['子', 'ko', 'child'],
    ['外', 'soto', 'outside'],
    ['八', 'hachi', 'eight'],
    ['六', 'roku', 'six'],
    ['下', 'shita', 'down, below'],
    ['来', 'kuru', 'come'],
    ['気', 'ki', 'spirit, mind'],
    ['小', 'chiisai', 'small'],
    ['七', 'nana', 'seven'],
  ];

  let characters;
  if (selectedScript === 'hiragana') {
    characters = hiragana;
  } else if (selectedScript === 'katakana') {
    characters = katakana;
  } else if (selectedScript === 'kanji') {
    characters = kanji;
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">Nekolingo</div>
        <nav className="nav">
          <button className="nav-item home">🏠 Learn</button>
          <button className="nav-item selected">あ Characters</button>
          <button className="nav-item">🏆 Leaderboards</button>
          <button className="nav-item">🗺️ Quests</button>
          <button className="nav-item">🎁 Shop</button>
          <button className="nav-item">🧑‍🦰 Profile</button>
          <button className="nav-item">⋯ More</button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="tabs">
          <span
            className={`tab ${selectedScript === 'hiragana' ? 'selected' : ''}`}
            onClick={() => setSelectedScript('hiragana')}
          >
            Hiragana
          </span>
          <span
            className={`tab ${selectedScript === 'katakana' ? 'selected' : ''}`}
            onClick={() => setSelectedScript('katakana')}
          >
            Katakana
          </span>
          <span
            className={`tab ${selectedScript === 'kanji' ? 'selected' : ''}`}
            onClick={() => setSelectedScript('kanji')}
          >
            Kanji
          </span>
        </header>

        <div className="intro">
          <h1>
            Let's learn{' '}
            {selectedScript === 'hiragana'
              ? 'Hiragana'
              : selectedScript === 'katakana'
              ? 'Katakana'
              : 'Kanji'}
            !
          </h1>
          <p>
            {selectedScript === 'kanji'
              ? 'Get to know the most common Kanji '
              : 'Get to know the main writing system in Japanese'}
          </p>
          <button className="tips-btn">TIPS</button>
          <button className="learn-btn">LEARN THE CHARACTERS</button>
        </div>

        <div className="characters-grid">
          {characters.map((item, index) => (
            <div className="char-box" key={index}>
              <div className="char">{item[0]}</div>
              <div className="romaji">{item[1]}</div>
              {selectedScript === 'kanji' && (
                <div className="meaning">{item[2]}</div>
              )}
              <div className="progress-bar" />
            </div>
          ))}
        </div>
      </main>

      <aside className="right-panel">
        <div className="card">
          <h3>Unlock Leaderboards!</h3>
          <p>Complete 9 more lessons to start competing</p>
        </div>

        <div className="card">
          <h3>
            Daily Quests <a href="#">VIEW ALL</a>
          </h3>
          <p>Earn 10 XP</p>
          <div className="quest-progress">
            <div className="bar">
              <span />
            </div>
            <span className="xp">0 / 10</span>
          </div>
        </div>

        <div className="card">
          <h3>Create a profile to save your progress!</h3>
          <button className="profile-btn green">CREATE A PROFILE</button>
          <button className="profile-btn blue">SIGN IN</button>
        </div>
      </aside>
    </div>
  );
};

export default HiraganaCharactersPage;