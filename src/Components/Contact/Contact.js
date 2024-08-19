import React from "react"
import * as S from "./Styles"

export default function Contact(){

    return(
        <>
            <S.Contact>
                <S.ContentContact>
                    <S.Left>
                        <h3>Contate-nos</h3>
                        <p>Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou precisa de suporte, não hesite em nos contatar.</p>

                        <div>
                            
                        </div>
                    </S.Left>

                    <S.Right>
                        <input type="email" placeholder="email@email.com"/>
                        <input type="text" placeholder="Nome"/>
                        <input type="text" placeholder="Seu número"/>
                        <textarea placeholder="Digite sua mensagem aqui"/>
                    </S.Right>
                </S.ContentContact>
            </S.Contact>
        </>
    )
}