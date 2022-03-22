/**
 * @author Khalil Khalil <khalil.khalil@ausy-technologies.de>
 */
import { Column } from "./column";

export class Utils {

/*static columnComparator(a, b) {
      if (a.order < b.order)
        return -1;
      if (a.order > b.order)
        return 1;
    return 0;
  }; */

  static columnComparator(a: Column, b: Column) {
     return  a.order < b.order ? -1 : ( a.order > b.order ?  1 : 0);
  };

}
