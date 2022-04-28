export const Colors = {
    // Example colors:
    transparent: 'rgba(0,0,0,0)',
    inputBackground: '#FFFFFF',
    white: '#ffffff',
    text: '#212529',
    primary: '#E14032',
    success: '#28a745',
    error: '#dc3545',
    clock:'#82aff8',
    btnSuccess:'#7AF176',
    unfocus:'#d8d8d8',
    iconsColor:'#3089f1',
    backgroundTop:'#308AF3',
    warning:'#FFB931'
  }
  
  export const NavigationColors = {
    primary: Colors.primary,
  }
  
  /**
   * FontSize
   */
  export const FontSize = {
    small: 16,
    advanger:18,
    regular: 20,
    sm:30,
    large: 40,
  }
  export const FontWeight={
      small:'500',
      sm:'600',
      large:'700'
  }
  export const ContainerFlexStart ={
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'baseline',
      flexDirection:'row'
  }
  export const ContainerFlexCenter ={
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    marginTop:15
  }
  export const ContainerColumn ={
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    marginTop:30
  }
  /**
   * Metrics Sizes
   */
  const tiny = 5 // 10
  const small = tiny * 2 // 10
  const regular = tiny * 3 // 15
  const large = regular * 2 // 30
  const xl = large *1.5 //45
  const huge =small *5
  const xxl = large *2  //60
  export const MetricsSizes = {
    tiny,
    small,
    regular,
    large,
    huge,
    xl,
    xxl
  }
  
  export default {
    Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
    FontWeight,
    ContainerFlexStart,
    ContainerFlexCenter,
    ContainerColumn
  }
  