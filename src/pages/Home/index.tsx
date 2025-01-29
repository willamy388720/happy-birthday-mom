import { Display, TextNormal } from "@styles/typography";
import { Apresentation, Content } from "./styles";
import { DivWithAnimation } from "@components/DivWithAnimation";
import { HorizontalScrollCarousel } from "@components/HorizontalScrollCarousel";

import { useAutoScroll } from "@hooks/useAutoScroll";
import { useState } from "react";

export function Home() {
  const [isInteractingWithCarousel, setIsInteractingWithCarousel] =
    useState(false);

  useAutoScroll({
    sectionIds: ["section1", "section2", "section3", "section4"],
    disabled: isInteractingWithCarousel,
  });

  return (
    <div>
      <div id="section1">
        <Content>
          <Apresentation className="section-1">
            <DivWithAnimation
              id="div1"
              initialAnimation={{ opacity: 0, y: 100 }}
              inViewAnimation={{ opacity: 1, y: 0 }}
              outViewAnimation={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div style={{ textAlign: "center" }}>
                <Display>Feliz Aniversário, Minha Rainha!</Display>
              </div>
            </DivWithAnimation>

            <DivWithAnimation
              id="div1"
              initialAnimation={{ opacity: 0, y: 100 }}
              inViewAnimation={{ opacity: 1, y: 0 }}
              outViewAnimation={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div style={{ textAlign: "center" }}>
                <TextNormal size="8" weight="thin">
                  Arrasta para baixo
                </TextNormal>
              </div>
            </DivWithAnimation>
          </Apresentation>
        </Content>
      </div>

      <div id="section2">
        <Content>
          <Apresentation>
            <DivWithAnimation
              id="div2"
              initialAnimation={{ opacity: 0, x: -200 }}
              inViewAnimation={{ opacity: 1, x: 0 }}
              outViewAnimation={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Display>Vamos começar...</Display>
            </DivWithAnimation>

            <DivWithAnimation
              id="div3"
              initialAnimation={{ opacity: 0, x: 200 }}
              inViewAnimation={{ opacity: 1, x: 0 }}
              outViewAnimation={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <TextNormal size="6" weight="regular">
                Eu queria te dar um presente especial, algo à altura da pessoa
                incrível que você é. Então, assim como uma criança que desenha e
                escreve "melhor mãe do mundo", me deixe usar uma folha um pouco
                mais avançada para expressar minha gratidão. Esta pequena
                homenagem é apenas uma forma de mostrar o quanto sou grato por
                tudo o que você me ensinou. O "dom" de programar que hoje
                carrego comigo é, na verdade, fruto do seu empenho desde os
                primeiros passos da minha alfabetização, quando ninguém via
                potencial. Você sempre esteve ao meu lado, apoiando e
                acreditando em mim. Foi sua paciência e dedicação que me
                permitiram seguir em frente.
              </TextNormal>
            </DivWithAnimation>
          </Apresentation>
        </Content>
      </div>

      <div id="section3">
        <HorizontalScrollCarousel
          onInteractionStart={() => setIsInteractingWithCarousel(true)}
          onInteractionEnd={() => setIsInteractingWithCarousel(false)}
        />
      </div>

      <div id="section4">
        <Content>
          <Apresentation>
            <DivWithAnimation
              id="div4"
              initialAnimation={{ opacity: 0, x: -200 }}
              inViewAnimation={{ opacity: 1, x: 0 }}
              outViewAnimation={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Display>E Por fim...</Display>
            </DivWithAnimation>

            <DivWithAnimation
              id="div5"
              initialAnimation={{ opacity: 0, x: 200 }}
              inViewAnimation={{ opacity: 1, x: 0 }}
              outViewAnimation={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <TextNormal size="6" weight="regular">
                Mãe, ao longo da vida você nos ensinou o verdadeiro significado
                de esforço e garra. A cada desafio, a sua força e determinação
                nos mostraram que nada é impossível quando se tem amor e
                dedicação. Cada passo que demos, cada dificuldade enfrentada,
                foi uma lição que guardamos com todo o carinho. Espero que tenha
                gostado dessa pequena homenagem, que é apenas uma forma de
                expressar minha eterna gratidão por tudo o que fez por nós. Te
                amo, hoje e sempre.
              </TextNormal>
            </DivWithAnimation>
          </Apresentation>
        </Content>
      </div>
    </div>
  );
}
