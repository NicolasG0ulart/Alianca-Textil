import React from "react"
import * as S from "./Styles"
import { Link } from "react-router-dom"

export default function Contact(){

    return(
        <>
            <S.Contact>
                <S.ContentContact>
                    <S.Left>
                        <h3>Contate-nos</h3>
                        <p>
                            Está precisando falar com a gente? Ou até mesmo vir até a nossa empresa?
                            Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou precisa de suporte, não hesite em nos contatar.
                        </p>

                        <div>
                            
                        </div>
                    </S.Left>

                    <Link to="/contato"><S.Button>Contato</S.Button></Link>
                </S.ContentContact>
            </S.Contact>
        </>
    )
}