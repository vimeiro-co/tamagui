// import './wdyr'

import { SelectDemo, SwitchDemo } from '@tamagui/demos'
import { Ban, Search } from '@tamagui/lucide-icons'
import { Stack, styled } from '@tamagui/web'
import {
  Anchor,
  Button,
  ButtonText,
  GroupNames,
  Image,
  Paragraph,
  Popover,
  SizableText,
  Square,
  XStack,
  YStack,
  createSwitch,
} from 'tamagui'

export const Sandbox = () => {
  return <>{/*  */}</>
}

// export default function SearchComp() {
//   return (
//     <XStack>
//       <Popover placement="left">
//         <Popover.Trigger asChild>
//           <XStack>
//             <Button p={'$2.5'} theme={'blue'} icon={<Search size={20} />} />
//           </XStack>
//         </Popover.Trigger>
//         <Popover.Content
//           theme={'blue'}
//           zIndex={199000}
//           borderWidth={1}
//           borderColor="$borderColor"
//           enterStyle={{ x: 0, y: -10, opacity: 0 }}
//           exitStyle={{ x: 0, y: -10, opacity: 0 }}
//           x={0}
//           y={0}
//           opacity={1}
//           p={0}
//           animation={'lazy'}
//           elevate
//         >
//           <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
//           <YStack p={'$3'} ai={'flex-start'} w={'100%'}>
//             <YStack w={'100%'}>
//               <Paragraph size={'$5'} col={'$color11'}>
//                 Drivers
//               </Paragraph>
//             </YStack>
//           </YStack>
//         </Popover.Content>
//       </Popover>
//     </XStack>
//   )
// }
