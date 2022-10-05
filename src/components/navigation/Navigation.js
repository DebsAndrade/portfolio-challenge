import React from "react";
import * as S from "../../styles/NavigationStyle"

const Navigation = () => {
    return(
        <S.HeaderNavigation>
            <ul>
                <S.ListItem>
                    <S.A href="#">Home</S.A>
                </S.ListItem>
                <S.ListItem>
                    <S.A href="#">About</S.A>
                </S.ListItem>
                <S.ListItem>
                    <S.A href="#">Work</S.A>
                </S.ListItem>
                <S.ListItem>
                    <S.A href="#">ONU</S.A>
                </S.ListItem>
            </ul>
        </S.HeaderNavigation>
    )
}

export default Navigation;