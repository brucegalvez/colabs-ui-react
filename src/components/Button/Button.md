```jsx
<Button text="Test Button" handleClick={() => false} />
```

You can use it with an icon:

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<Button
  text="Button with Icon"
  icon={<LeftArrow />}
  iconPos="left"
  handleClick={() => false}
/>;
```

You can set that up as large

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<Button
  text="Large Button"
  size="lg"
  // color="red"
  handleClick={() => false}
  icon={<LeftArrow />}
  // type
/>;
```
