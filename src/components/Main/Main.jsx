
import { useState } from "react";
import "./Main.css"

function Main(){
  
  const [info, setInfo] = useState("");

   const ps2 = () => {
    setInfo("PlayStation 2 (PS2) é um console de videogames produzido pela Sony Computer Entertainment. Foi lançado no dia 4 de março de 2000 no Japão.");
  };
  const nitendo = () => {
    setInfo("Com quase 20 anos de idade, o Nintendo 64 é um dos consoles mais consagrados de todos os tempos entre os títulos de maior destaque estão The Legend of Zelda: Ocarina of Time e Super Mario 64")
  }; 
  const superNitendo = () => {
    setInfo("Quadrado e com botões roxos, o Super Nintendo é um símbolo importante para jogadores e mais um console famoso da fabricante japonesa. Grande parte do sucesso do videogame vem dos jogos exclusivos, que conquistaram fãs graças aos heróis carismáticos, enredos criativos e jogabilidade interessante, como Super Mario")
  }; 
  const ps1 = () => {
    setInfo("Um clássico instantâneo, o PlayStation 1 revolucionou o mundo dos consoles desde os anos 90 até 2006, quando teve a produção descontinuada. O videogame rodou títulos populares como Resident Evil, Tomb Raider, Final Fantasy VII, Gran Turismo e Crash Bandicoot")
  }; 
  
  const atari = () => {
    setInfo("Pac-Man, BreakOut, Donkey Kong, Centipede e Pong... Você, provavelmente, já ouviu falar de algum desses games, assim como a plataforma que deu fama a cada um: o Atari 2600")
  }; 

  const megaDrive = () => {
    setInfo("Pac-Man, BreakOut, Donkey Kong, Centipede e Pong... Você, provavelmente, já ouviu falar de algum desses games, assim como a plataforma que deu fama a cada um: o Atari 2600")
  }; 

  return (
    <main>
      <section id="container-details" className="container">
      <div className="card">
        <img onClick={nitendo}src="https://images.tcdn.com.br/img/img_prod/1211726/nintendo_64_seminovo_1213_1_ba99f3b8f7d209c446584ea695e09d75.png" alt="Nitendo 64" />
        <p>{info}</p>
      </div>
      <div className="card">
        <img onClick={superNitendo} src="https://sites.unoeste.br/museufipp/wp-content/uploads/2016/06/superNintendo.png" alt="Super Nitendo"/>
        <p>{info}</p>
      </div>
      <div className="card">
        <img onClick={ps1}src="https://s2-techtudo.glbimg.com/_KxnXERoQdubHiP5QJGyqdG_P0o=/0x0:695x390/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/L/T/EiTMunRquN9e3zHJv1Ew/playstation-one-psone-sony-25-anos-novo-design.jpg" alt="PS ONE" />
      <p>{info}</p>
      </div>
      <div className="card">
        <img onClick={atari} src="https://s2-techtudo.glbimg.com/LcMWE6GYbJXKLGY_aot1T_rmkTs=/0x0:695x406/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/x/o/462AtxQOWxsFDZcJrfiw/2015-12-02-atari-2600-wood-4sw-set.jpg" alt="Atari" />
      <p>{info}</p>
      </div>
      <div className="card">
        <img onClick={megaDrive} src="https://s2-techtudo.glbimg.com/yWSIzL23HHF6oLIyLG-UCPkBQwo=/0x0:695x348/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/V/m/fMxRi5R2WedkGbp9Bc8Q/2015-02-25-sega-mega-drive-jp-mk1-console-set-2.jpg" alt="Mega drive" />
      <p>{info}</p>
      </div>
      <div className="card">
        <img  onClick={ps2}src="https://s2-techtudo.glbimg.com/HUviKjbHFQ8WfhVJUEEbfo2sYG0=/0x0:695x390/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/q/E/zZjJhTRlqeGY8aX3sg7w/playstation-2-ps2-20-anos-fatos-curiosos-console-sony.jpg" alt="PS2" />
        <p>{info}</p>
      </div>
    </section>
    </main>
  );
}

export default Main; 