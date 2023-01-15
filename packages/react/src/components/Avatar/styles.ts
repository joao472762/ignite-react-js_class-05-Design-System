import { styled } from "../../styles";
import {Root,Fallback,Image} from '@radix-ui/react-avatar';
import { ComponentProps } from "@stitches/react";


export const AvatarContainer = styled(Root, {
    display: 'block',
    width: '$12',
    height: "$12",
    borderRadius: '$full',
    overflow: 'hidden'


})

export const AvatarImage = styled(Image, {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
})

export const AvatarFallback = styled(Fallback, {
    height: '100%',
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$gray600',
    color: '$gray200',

    svg: {
        width: '$6',
        height: '$6',
    }
})


