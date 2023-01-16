import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage} from "./styles";
import {User} from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage>{
    fallback?: string
}
export function Avatar({fallback,...rest}: AvatarProps){
    return (
        <AvatarContainer>
            <AvatarImage {...rest}/>
            <AvatarFallback delayMs={600}>
                <User/>
            </AvatarFallback>

        </AvatarContainer>
    )
}


Avatar.displayName = "Avatar"
