// import React, { PureComponent } from 'react';
// import { FixedSizeList as List } from "react-window";
// import InfiniteLoader from "react-window-infinite-loader";
// import AutoSizer from "react-virtualized-auto-sizer";
// export default function NewSpectrum({

//   // Are there more items to load?
//   // (This information comes from the most recent API request.)
//   hasNextPage,

//   // Are we currently loading a page of items?
//   // (This may be an in-flight flag in your Redux store for example.)
//   isNextPageLoading,

//   // Array of items loaded so far.
//   items,

//   // Callback function responsible for loading the next page of items.
//   loadNextPage
// }) {
//   // If there are more items to be loaded then add an extra row to hold a loading indicator.
//   const itemCount = hasNextPage ? items.length + 1 : items.length;

//   // Only load 1 page of items at a time.
//   // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
//   const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

//   // Every row is loaded except for our loading indicator row.
//   const isItemLoaded = index => !hasNextPage || index < items.length;

// //   const article = itemData[this.props.index];
  
// //Follow this pattern of 'let', data[index]. and return until whole article is built
//   const Item = ({ index, style, data }) => {
//     let sentiment;
//     if (!isItemLoaded(index)) {
//       sentiment = "Loading...";
//     } else {
//       sentiment = data[index].sentiment;
//     }

//     return <div style={style}>{sentiment}</div>;
//   };

//   return (
//     <InfiniteLoader
//       isItemLoaded={isItemLoaded}
//       itemCount={itemCount}
//       loadMoreItems={loadMoreItems}
//     >
//       {({ onItemsRendered, ref }) => (
//         <AutoSizer>
//             {({ height, width}) => (
//                 <List
//                 className="List"
//                 height={50}
//                 itemCount={itemCount}
//                 itemData={items}
//                 itemSize={250}
//                 layout="horizontal"
//                 onItemsRendered={onItemsRendered}
//                 ref={ref}
//                 width={width}
//                 >
//                 {Item}
//                 </List>
//             )}
//         </AutoSizer>
//       )}
//     </InfiniteLoader>
//   );
// }

// // class Item extends PureComponent {
// //     render() {
// //       // Access the items array using the "data" prop:
   
// //       return (
// //         <div style={this.props.style}>
// //             {/* {this.props.data.map((article, index) => (
// //                 <NewCard
// //                 key={index}
// //                 story={article}
// //                 />
// //             ))} */}
// //             <p>{article.Author}</p>
// //         </div>
// //       );
// //     }
// //   }