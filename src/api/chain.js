import { Name, BlockIdOrNum } from '../schema';

export default {
  get_account: {
    params: {
      account_name: Name
    }
  },
  get_code: {
    params: {
      account_name: Name
    }
  },
  get_info: {

  },
  get_block: {
    params: {
      block_num_or_id: BlockIdOrNum
    }
  }
};
