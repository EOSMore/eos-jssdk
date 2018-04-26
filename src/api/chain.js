import { Name, String, BlockIdOrNum } from '../schema';

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
  get_currency_balance: {
    params: {
      code: Name,
      account: Name,
      symbol: String
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
